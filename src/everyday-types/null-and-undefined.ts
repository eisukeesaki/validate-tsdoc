function fn(p: string | null): void {
  if (p === null)
    return;
  console.log(p.toUpperCase());
}

fn(null);
