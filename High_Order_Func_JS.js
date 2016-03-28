function add(x, y, f) {
	return f(x)+f(y);
}

x = 3;
y = -5;
//f = Math.abs;

out = add(x, y, Math.abs);

console.log(out);