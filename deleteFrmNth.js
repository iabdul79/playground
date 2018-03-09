function deleteFrmNth(nPointer) {
  if (nPointer === null) {
    return null
  }
  while(nPointer !== null) {
    nPointer = nPointer.nextPointer;
    nPointer.data = nPointer.nextPointer.data;
  }
  return nPointer;
}