import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  try {
    const message = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', message);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral(): Promise<void> {
  try {
    const message = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', message);
    const message2 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', message2);
    const message3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', message3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained(): Promise<void> {
  try {
    const message1 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', message1);
    const message2 = await read(message1, false);
    console.log(elapsed(), 'throwChained2:', message2);
    const message3 = await read(message2, false);
    console.log(elapsed(), 'throwChained3:', message3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

throwOnce();
await throwSeveral();
await throwChained();
