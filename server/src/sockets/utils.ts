function insertData(set: Set<unknown>, data: string) {
  return set.add(data);
}

function removeData(set: Set<unknown>, data: string) {
  return set.delete(data);
}

export { insertData, removeData };
