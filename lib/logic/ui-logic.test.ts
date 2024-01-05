import { renderHook } from "@testing-library/react-hooks";
import { useUILogic } from "./ui-logic";
import { faker } from "@faker-js/faker";
export const delay = async (maxDuration: number) =>
  await new Promise((resolve) => {
    setTimeout(resolve, maxDuration);
  });

/* -------------------------------------------------------------------------- */
/*                                   Faking                                   */
/* -------------------------------------------------------------------------- */
const fakedStreamUrl = faker.internet.url() + "/";
/* -------------------------------------------------------------------------- */
/*                                   Mocking                                  */
/* -------------------------------------------------------------------------- */
const mockedAddEventListener = vitest.fn();
const mockedPauseMethod = vitest.fn();
global.Audio = vitest.fn().mockImplementation(() => ({
  ...global.Audio,
  pause: mockedPauseMethod,
  play: vitest.fn(),
  addEventListener: mockedAddEventListener,
  removeEventListener: vitest.fn(),
}));
/* -------------------------------------------------------------------------- */
/*                                   Testing                                  */
/* -------------------------------------------------------------------------- */
describe("UI Logics", () => {
  const callVM = (
    streamUrl: string,
    onErrorCatched?: (mediaError: MediaError | null, event: ErrorEvent) => void,
  ) => renderHook(() => useUILogic(streamUrl, onErrorCatched));
  describe("Audio Ref", () => {
    describe("Happy Path", () => {
      it("Should return correct stream url on passing stream url", () => {
        // ! Act
        const vm = callVM(fakedStreamUrl);
        console.log(vm.result.current.isPlay);
        // ? Assert
        expect(vm.result.current.audioRef.src.trim()).toEqual(fakedStreamUrl);
      });

      it("Should call pause on unmount of component", () => {
        // * Arrange
        const vm = callVM(fakedStreamUrl);
        // ! Act
        vm.unmount();
        // ? Assert
        expect(mockedPauseMethod).toHaveBeenCalled();
      });

      it("Should change volume correctly on changing volume", async () => {
        // * Arrange
        const fakedVolumeToChange = 700;
        const vm = callVM(fakedStreamUrl);
        // ! Act
        vm.result.current.onChangeVolume(fakedVolumeToChange);
        await delay(1000);
        // ? Assert
        const expectedVolume = fakedVolumeToChange / 100;
        expect(vm.result.current.audioRef.volume).toEqual(expectedVolume);
      });

      it("Should change isPlay to true on call play toggler", () => {
        // * Arrange
        const vm = callVM(fakedStreamUrl);
        // ! Act
        vm.result.current.onClickPlayToggler();
        // ? Assert
        expect(vm.result.current.isPlay).toEqual(true);
      });

      it("Should change isPlay to false on call prev next", () => {
        // * Arrange
        const vm = callVM(fakedStreamUrl);
        // ! Act
        vm.result.current.onClickPlayToggler();
        vm.result.current.onClickPrevNextHandler();
        // ? Assert
        expect(vm.result.current.isPlay).toEqual(false);
      });
    });
  });
});
