
console.log( process.env.PORT ?? 3000 );

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

console.log({SHELL, HOMEBREW_PREFIX, npm_lifecycle_script});
