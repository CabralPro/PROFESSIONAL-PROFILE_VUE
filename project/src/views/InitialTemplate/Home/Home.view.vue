<template>
  <div class="home">
    <HeaderHome />

    <div class="content-body">
      <div id="intro">
        <TextCard
          v-for="textCard of textCards"
          :key="textCard.title"
          :textCard="textCard"
        />
      </div>

      <div id="skills"></div>

      <div class="areas" v-animate.repeat.fade="'slide-up'">
        <h1 class="title">Skills</h1>

        <div class="row">
          <Fieldset title="Fron-End">
            <SkillCard
              v-for="skill of webSkills"
              :key="skill.title"
              :skill="skill"
            />
          </Fieldset>

          <Fieldset
            title="Back-End"
            v-animate.repeat.fade="'slide-right'"
            style="max-width: 725px"
          >
            <SkillCard
              v-for="skill of backendSkills"
              :key="skill.title"
              :skill="skill"
            />
          </Fieldset>

          <Fieldset title="Mobile" v-animate.repeat.fade="'slide-left'">
            <SkillCard
              v-for="skill of mobileSkills"
              :key="skill.title"
              :skill="skill"
            />
          </Fieldset>

          <Fieldset
            title="Database"
            v-animate.repeat.fade="'slide-left'"
            :style="{ width: '100%' }"
          >
            <SkillCard
              v-for="skill of databaseSkills"
              :key="skill.title"
              :skill="skill"
            />
          </Fieldset>

          <Fieldset
            title="Devops and others"
            v-animate.repeat.fade="'slide-right'"
            :style="{ width: '100%' }"
          >
            <SkillCard
              v-for="skill of severalSkills"
              :key="skill.title"
              :skill="skill"
            />
          </Fieldset>
        </div>
      </div>

      <div id="portfolio" />

      <div class="portifolio row" v-animate.repeat.fade="'slide-up'">
        <h1 class="title">Portfolio</h1>
        <ProjectCard
          v-for="project of projects"
          :key="project.title"
          :project="project"
        />
      </div>

      <div
        class="contato col"
        id="contact"
        v-animate.repeat.fade="'slide-up'"
      >
        <h1>I'm excited to understand your project. Ready to get started?</h1>
        <a
          class="btn"
          href="https://api.whatsapp.com/send?phone=5531998762713&text=Hello%2C%20I%20come%20through%20the%20site%20https%3A%2F%2Fcabral-tec.web.app"
					target="_blank"
        >
          <span class="iconify" data-icon="logos:whatsapp"></span>
          Send message
        </a>
      </div>
    </div>

    <FooterHome />
		
  </div>
</template>

<script src="./Home.view.ts" lang="ts"></script>
<style src="./Home.view.scss" scoped lang="scss"></style>