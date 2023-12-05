import style from './style.module.css'

export function helloAnything(thing: string): string {
  console.log(style.button);
  return `Hello ${thing}!`
}