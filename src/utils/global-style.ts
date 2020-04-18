const getCurrentFontRoot = () => {
  if (typeof window === 'undefined') return null;
  const root = document.getElementsByTagName('html')[0] as HTMLElement;
  return root.style.fontSize;
};

export { getCurrentFontRoot };
