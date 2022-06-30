# TDD + D3.js


배포된 사이트 :

**quick start**
```
npm install
npm run start
```

---

## Animation

**Main 화면**
1. gsap ScrollTrigger의 pin : true 속성을 이용하여 화면고정을 함.

position : fixed 속성을 적용하는 것과는 어떤 차이가 있는가?

=> position : fixed 속성을 사용한다면, 엘리먼트가 fixed로 변경되면서 DOM 구조가 붕괴(변경) 됨을 야기할 수 있다. 즉, fixed된 엘리먼트로 인해서 다른 엘리먼트들이 그 자리를 차지하게 되는 경우이다.

이러한 경우를 대비하여 gsap 에서는 fixed 된 엘리먼트와 같은 크기의 div 엘리먼트를 생성하여 프록시 요소로 활용한다.

더 자세한 사항은 https://greensock.com/docs/v3/Plugins/ScrollTrigger 에서
"How does pinning work under the hood?" 란에서 설명하고 있다.

**scrollNavBar**
scrollNavBar 를 두가지 방식으로 구현
1. scrollHeight 와 viewport의 height 를 이용한 연산으로 height 속성을 변경.
2. gsap animation 라이브러리의 scrollTrigger.scrub 사용.

두가지 방식의 차이점은?


![image](https://user-images.githubusercontent.com/34260967/170683489-f1da3d12-b9c9-47e9-b1df-9efa9f2667be.png)

![image](https://user-images.githubusercontent.com/34260967/170683831-cf874efc-a048-44d8-9c18-a17aa7b92859.png)



1번은 현재 scroll의 위치를 가져와서 사용해야하고 그에 따라 state가 변경되고 스타일속성이 변경된다. 따라서 매 스크롤 마다 리랜더링하는 과정을 거쳐야 한다.

하지만 gsap animation 을 사용한 2번은 그렇지않다. state에 의존하지 않기 때문에, 불필요한 리랜더링은 하지않고, 스타일을 redraw하는 작업만 하게 된다. 


**useRef vs id**

DOM의 Element를 직접 조작하기 위해 useRef() 를 사용하는것과 id를 사용하는것은 어떤 차이가 있을까?

useRef()를 사용하는 것이 낫다.

id를 사용하면 다음과 같은 문제가 생긴다.
1. 재사용성을 제한적이게 만든다.
동일한 id를 가진 elements 에게 동일한 효과를 적용시키지 못한다. getElementById()가 가장 첫번째로 찾아넨 element만이 효과가 적용된다. 또한 같은 컴포넌트라도 다른 효과를 주고 싶을 때에는, 여러번 사용되는 컴포넌트들의 id를 각각 다르게 해주어야만 한다. 

https://www.javascriptstuff.com/use-refs-not-ids/

2. napespace 충돌
일반적으로 DOM에 id property가 있다면, window 객체에서 전역으로 id를 저장하게 된다. 이 때 지정된 스코프 내에서 쓰이는 변수의 name과 id.name이 같다면, namespace 충돌을 일으키게 되어 안정성을 보장받지 못한다. (이를 해결하기 위해서는 id 값을 다른 변수값에 넣어서 사용해야한다.)

https://greensock.com/forums/topic/13965-div-id-names-automatically-selected-by-gsap/?do=findComment&comment=58896


---

## D3.js

D3.js 로 컴포넌트를 만들 때, 사용할 수 있는 방법은 크게 3가지가 있다
- HTML Element
- SVG
- Canvas

이 세가지의 차이점을 알아보자.

- HTML Element(div) : 무난하지만, 로딩이 길어진다.
- SVG : 선택과 이동이 쉽다. 가볍고 확장성이 크다. 
- Canvas : 성능적으로 우수하지만, 객체를 모두 구현해야하고, state를 관리해야한다.

D3.js 공식문서에서도 SVG를 사용할 것을 권유하고 있다. SVG를 사용해서 컴포넌트를 개발해보자.
