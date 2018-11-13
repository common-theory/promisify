declare module '@ctheory/promisify' {
  function promisify<R, A>(fn: (...A) => R): (...A) => Promise<R>;
}
