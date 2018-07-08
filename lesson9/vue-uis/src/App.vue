<template>
  <div id="app">
    <div>按钮组件:</div>
    <Button value="default" long />
    <Button value="dashed" type="dashed"/>
    <Button value="text" type="text"/>
    <Button value="info" type="info" long/>
    <Button value="success" type="success"/>
    <Button value="warning" type="warning"/>
    <Button value="error" type="error" long/>
    <div>字体图标组件:</div>
    <Icon type="jd" />
    <Icon type="bangzhu" :size="40" />
    <Icon type="user" :size="30" color="#2d8cf0"/>
    <Icon type="bianji" />
    <Icon type="chuanshuju" :size="35" color="red"/>
    <div>输入框组件:</div>
    <vInput placeholder="small输入框" size="small" />
    <vInput lValue="$" rValue=".00" long size="large" placeholder="large输入框"/>
    <vInput lValue="username:" placeholder="请输入用户名"/>
    <vInput rValue="@example.com" long placeholder="default输入框" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
