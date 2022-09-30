function fn(p?: string | null): void {
  console.log(p!.toUpperCase());
}

fn();
