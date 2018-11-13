declare module '@ctheory/promisify' {
  function promisify<T>(fn: (...any) => T): () => Promise<T>;
}
