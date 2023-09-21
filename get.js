const get = (src, path) => path.split('.').reduce((obj, key) => obj?.[key], src);
