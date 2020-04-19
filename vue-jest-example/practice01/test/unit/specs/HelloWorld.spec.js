import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";

let Constructor, vm, first, second, msg;

beforeEach(() => {
  Constructor = Vue.extend(HelloWorld);
  vm = new Constructor().$mount();
  first = vm._data.first;
  second = vm._data.second;
  msg = vm._data.msg;
});

describe("HelloWorld.vue", () => {
  describe("유효성 검사", () => {
    it("숫자가 아닌 문자열을 입력할 경우 결과값이 에러인지 확인", () => {
      second = "가";
      expect(vm.plus(first, second)).toBeNaN();
    });
  });
  describe("사칙 연산", () => {
    it("더하기", () => {
      first = 10;
      second = 20;
      expect(vm.plus(first, second)).toBe(30);
    });
  });
  describe("Computed Test", () => {
    it("reversedMsg", () => {
      expect(vm.reversedMsg).toBe("tseT tinU");
    });
  });
});
