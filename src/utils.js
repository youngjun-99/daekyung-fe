export const wclamp = (min, max) => {
  return `clamp(${min}px, calc(${max} * 100vw / 1920), ${max}px)`;
};

export const mwclamp = (min, max) => {
  return `clamp(${min}px, calc(${max} * 100vw / 789), ${max}px)`;
};

export const hclamp = (min, max) => {
  return `clamp(${min}px, calc(${max} * 100vh / 1080), ${max}px)`;
};

export default wclamp;
