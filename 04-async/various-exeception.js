class DoubleError extends Error {};
class TripleError extends Error {};
class QuintupleError extends Error {};

try {
  const num = Math.floor(Math.random() * 100);
  console.error(num);

  if (num % 2 === 0) {
    throw new DoubleError;
  } else if (num % 3 === 0) {
    throw new TripleError;
  } else if (num % 5 === 0) {
    throw new QuintupleError;
  } else {
    throw new Error;
  }
} catch (e) {
  if (e instanceof DoubleError) {
    console.log('Divisible by 2');
  } else if (e instanceof TripleError) {
    console.log('Divisible by 3'); 
  } else if (e instanceof QuintupleError) {
    console.log('Divisible by 5');
  } else {
    console.log('Not divisible by 2, 3, or 5');
  }
}
