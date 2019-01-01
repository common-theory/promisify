type CallbackFunction<T, R> = (...args: T[]) => R;
type PromiseFunction<T, R> = (...args: T[]) => Promise<R>

declare module '@ctheory/promisify' {
  export default function promisify<T, R>(fn: CallbackFunction<T, R>): PromiseFunction<T, R>;
}
