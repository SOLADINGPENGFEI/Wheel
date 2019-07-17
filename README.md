# chelun

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vuex中重新给state赋值
element没有随vue2.0更新代码，如果在计算属性里写...mapState([''])这种形式，会被提醒计算属性被分配到但它没有设置器，解决方案两种，第一种，设置这个set方法：
computed:{

isAllChecked:{
  get: function () {
    return this.$store.state.isAllChecked;
  },
  set: function (newValue) {
    this.$store.state.isAllChecked = newValue;
  }
}
}
第二种，在data里重新赋值给一个新变量：
data () {

return {
  isAllChecked:this.$store.state.isAllChecked
}
}
