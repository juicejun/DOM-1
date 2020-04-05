// const div = dom.create("div");
// const span = dom.create("span")
// div.appendChild(span)
// console.log(div);
const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create(`<div id="parent"></div>`);
dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi,I am juicejun");
//三个参数实现了写
const title = dom.attr(test, "title");
//两个参数实现了读
console.log(`title:${title}`);

dom.text(test, "你好，这是新的内容");
dom.text(test);

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "blue"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
// dom.find(".red", testDiv);
// console.log(testDiv);
console.log(dom.find(".red", test2)[0]);

console.log(dom.parent(test));

const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

