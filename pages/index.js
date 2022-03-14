// Sections
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectSection from '../components/sections/ProjectSection'
import GithubSection from '../components/sections/GithubSection'

export default function Home() {

  return (
    <div  >
      {/* <mobileHeader /> */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <GithubSection />
    </div>
  );
}
