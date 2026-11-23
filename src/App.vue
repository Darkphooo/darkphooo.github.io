<script setup>
import HomeView from '@/views/HomeView.vue'
import logo from '../img/logo.png'
</script>

<template>
  <div class="site-shell">
    <a href="#main-content" class="skip-link">跳转到正文</a>
    <header class="site-header">
      <a href="./" aria-label="Darkphooo 首页"><img :src="logo" alt="Darkphooo" class="site-logo"></a>
      <span class="header-note">个人空间 <span aria-hidden="true">/</span> PERSONAL SPACE</span>
    </header>

    <main id="main-content" tabindex="-1">
      <HomeView />
    </main>

    <footer id="footer">
      <p class="footer-note">写代码，也记录生活。</p>
      <p><a href="https://github.com/Darkphooo">Copyright &copy;2026 Darkphooo, All Rights Reserved</a></p>
      <p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">苏ICP备2026091781号</a></p>
    </footer>
  </div>
</template>
