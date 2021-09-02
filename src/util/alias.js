export const _default = (options, default_json) => {
  options = options || {};
  for (let prop in default_json) {
    options[prop] =
      typeof options[prop] !== "undefined" ? options[prop] : default_json[prop];
  }
  return options;
};

export const _getBoundingBox = (x, y) => {
  return {
    left: Math.min(x),
    right: Math.max(x),
    top: Math.min(y),
    bottom: Math.max(y),
  };
};

export const _center = (x, y) => {
  return { x: _avg(x), y: _avg(y) };
};

export const _sum = (list) => list.reduce((a, b) => a + b, 0);
export const _avg = (list) => _sum(list) / list.length || 0;
