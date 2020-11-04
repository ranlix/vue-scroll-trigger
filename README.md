# vue-scroll-trigger
A Vue plugin which supervises binding element's scrolling and trigger target elements class

# Sample
[BEHIVE-DESIGN](https://www.behive-design.com/office)

# Install

#### with `yarn` :
`yarn add vue-scroll-trigger`

#### or with `npm` :
`npm install vue-scroll-trigger --save`

# Usage

```javascript
import vueScrollTrigger from 'vue-scroll-trigger'

Vue.use(vueScrollTrigger);
```

```html
  <div class="menu">
    <ul>
      <li id="menu-item-1">menu item 1</li>
      <li id="menu-item-1">menu item 2</li>
      <li id="menu-item-1">menu item 3</li>
      <li id="menu-item-1">menu item 4</li>
    </ul>
  </div>
  <div class="container office__container">
    <section id="profile" v-scroll-trigger="{ targetId: 'menu-item-1' }">
      section block
    </section>
    <section id="people" v-scroll-trigger="{ targetId: 'menu-item-2' }">
      section block
    </section>
    <section id="awards" v-scroll-trigger="{ targetId: 'menu-item-3' }">
      section block
    </section>
    <section id="joinus" v-scroll-trigger="{ targetId: 'menu-item-4' }">
      section block
    </section>
  </div>
```