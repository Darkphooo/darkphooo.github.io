<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ArrowDown, ArrowUpRight, Mail, MapPin, Code2 } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import background from '../../img/background.jpg'
import { elapsedSinceBirth } from '@/time'

const now = ref(Date.now())
const elapsed = computed(() => elapsedSinceBirth(now.value))
const labels = ['天', '时', '分', '秒']
const projects = [
  {
    name: 'flight-demo-cesium', title: '在三维地球上，追踪航迹。',
    category: '空间可视化', description: '基于 Cesium 的飞行追踪演示，把航迹数据放进可交互的三维场景。',
    stack: ['Vue 3', 'TypeScript', 'Cesium'],
  },
  {
    name: 'endfield-recruitment-simulator', title: '在模拟寻访里，试试运气。',
    category: '游戏工具', description: '《明日方舟：终末地》寻访模拟器，包含寻访结果、保底机制与历史记录。',
    stack: ['React', 'TypeScript', 'Vite'],
  },
]
let timer
onMounted(() => { timer = setInterval(() => { now.value = Date.now() }, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="home-page">
    <section class="intro-section" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow"><span class="intro-marker" aria-hidden="true"></span> A DEVELOPER'S PERSONAL SPACE</p>
        <h1 id="intro-title">你好，我是<br><span class="name">Darkphooo<span class="accent-dot">.</span></span></h1>
        <p class="intro-lead">用代码，把想法变成体验。</p>
        <p class="intro-description">一名在南京的开发者。探索 Vue 与 Node.js，也用可视化、创意应用和游戏工具，记录那些值得动手的灵感。</p>
        <div class="intro-actions">
          <Button as-child size="lg"><a href="https://github.com/Darkphooo" target="_blank" rel="noopener noreferrer"><Code2 data-icon="inline-start" />在 GitHub 找到我<ArrowUpRight data-icon="inline-end" /></a></Button>
          <Button as-child variant="outline" size="lg"><a href="mailto:dark.xiaoyao@live.com"><Mail data-icon="inline-start" />联系我</a></Button>
        </div>
        <a href="#projects" class="explore-link">往下看看我的项目 <ArrowDown aria-hidden="true" /></a>
      </div>

      <Card class="profile-card gap-5 pt-0">
        <div class="profile-cover"><img :src="background" alt="" class="profile-cover-image"><span class="profile-cover-label">CODE / LIFE / CURIOSITY</span></div>
        <CardHeader>
          <div class="flex items-center gap-3">
            <Avatar size="lg"><AvatarImage src="https://avatars.githubusercontent.com/u/10510741?v=4&amp;s=160" alt="Darkphooo 的 GitHub 头像" /><AvatarFallback>DP</AvatarFallback></Avatar>
            <div><CardTitle>Darkphooo</CardTitle><CardDescription>Yifei Chu · @Darkphooo</CardDescription></div>
          </div>
        </CardHeader>
        <CardContent>
          <dl class="profile-details">
            <div><dt><MapPin aria-hidden="true" /> 所在城市</dt><dd>南京，中国</dd></div>
            <div><dt><Code2 aria-hidden="true" /> 持续探索</dt><dd>Vue / Node.js</dd></div>
            <div><dt>代码之外</dt><dd>摄影 · 足球 · 电影</dd></div>
          </dl>
        </CardContent>
        <CardFooter class="flex-col items-stretch gap-3">
          <p class="profile-caption">保持好奇的每一天 <span>EST. 1994</span></p>
          <ul class="countdown" aria-label="出生至今的时间">
            <li v-for="(value, index) in elapsed" :key="labels[index]"><span>{{ value }}</span><small>{{ labels[index] }}</small></li>
          </ul>
        </CardFooter>
      </Card>
    </section>

    <section id="projects" class="projects-section" aria-labelledby="projects-title">
      <div class="section-heading">
        <div><p class="eyebrow">SELECTED WORK</p><h2 id="projects-title">一些想法，一些实践<span class="accent-dot">.</span></h2></div>
        <a href="https://github.com/Darkphooo?tab=repositories" target="_blank" rel="noopener noreferrer" class="text-link">全部公开仓库 <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div class="project-grid">
        <Card v-for="(project, index) in projects" :key="project.name" class="project-card h-full">
          <CardHeader>
            <p class="project-category">0{{ index + 1 }} <span>/ {{ project.category }}</span></p>
            <CardTitle><h3>{{ project.title }}</h3></CardTitle>
            <CardDescription>{{ project.name }}</CardDescription>
            <CardAction><Code2 aria-hidden="true" /></CardAction>
          </CardHeader>
          <CardContent class="flex-1"><p class="project-description">{{ project.description }}</p><div class="mt-5 flex flex-wrap gap-2"><Badge v-for="technology in project.stack" :key="technology" variant="secondary">{{ technology }}</Badge></div></CardContent>
          <CardFooter><Button as-child variant="ghost" class="w-full justify-between"><a :href="`https://github.com/Darkphooo/${project.name}`" target="_blank" rel="noopener noreferrer" :aria-label="`查看 ${project.name} 源码`">查看源码 <ArrowUpRight data-icon="inline-end" /></a></Button></CardFooter>
        </Card>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="contact-title">
      <div><p class="eyebrow">LET'S CONNECT</p><h2 id="contact-title">有想法，聊聊吧。</h2><p>关于代码、项目，或者一个还没成形的灵感。</p></div>
      <Button as-child variant="outline" size="lg"><a href="mailto:dark.xiaoyao@live.com">dark.xiaoyao@live.com <ArrowUpRight data-icon="inline-end" /></a></Button>
    </section>
  </div>
</template>
