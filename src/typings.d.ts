interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module 'tailwind.macro' {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const tw: any;
  export = tw;
}

declare module '*.json' {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const value: any;
  export default value;
}

declare module 'aos' {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const value: any;
  export default value;
}
