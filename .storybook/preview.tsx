import type { Preview } from "@storybook/react";

/**
 *
 * This function will expand the object with nested properties
 * @param obj refrence Object to that
 * @param leftKeys keys to be nested object keys
 * @param value value to be nested
 *
 */
export const recursiveNestedProps = (
  obj: Record<string, unknown>,
  leftKeys: string[],
  value: unknown,
): Record<string, unknown> => {
  if (leftKeys.length <= 0) return obj;
  if (leftKeys.length === 1) {
    // eslint-disable-next-line no-param-reassign
    obj[leftKeys[0]] = value;
    return obj;
  }
  const key = leftKeys.shift();
  if (!key) return obj;

  if (!obj[key]) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = {};
  }

  return recursiveNestedProps(
    obj[key] as Record<string, unknown>,
    leftKeys,
    value,
  );
};

const preview: Preview = {
  decorators: [
    (Story, data) => {
      const parsedProps = {} as Record<string, unknown>;
      const props = data.allArgs;
      Object.entries(props).forEach((prop) => {
        const [key, value] = prop;
        if (!key.includes("theme")) {
          parsedProps[key] = value;
          return;
        }
        const splitedKey = key.split(".");

        recursiveNestedProps(parsedProps, splitedKey, value);
      });

      return (
          <Story parsedProps={parsedProps} />
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
