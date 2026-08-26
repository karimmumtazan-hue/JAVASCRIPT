console.log("===================================");
console.log(" MATERI 3 PART 2 - DATA PROCESSING");
console.log("===================================");
const skills = ['html', 'css', 'javascript', 'python'];
console.log(skills);
// push = nambah diatas item terakhir 
// unshift = nambah di item pertama
skills.push('tailwindCSS');
skills.unshift('github');
console.log(skills);
// pop = menghapus item terakhir 
// shift = menghapus item pertama
skills.pop()
skills.pop()
skills.shift()
console.log(skills);
// includes = cek apakah ada di array atau tidak
const cekJs = skills.includes('javascript')
const cekReactJs = skills.includes('ReactJs')
console.log({ cekJs, cekReactJs });
