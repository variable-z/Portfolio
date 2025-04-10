import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChartBar, faChartLine, faDatabase, faCloud, faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3, DiMysql, DiMongodb } from "react-icons/di";
import { AiFillWindows } from "react-icons/ai";
import { SiPostgresql, SiReact, SiRedis, SiSnowflake, SiElasticsearch, SiTensorflow, SiPytorch, SiOpencv,
  SiSpacy, SiKubernetes, SiLooker, SiGoogledrive, SiTableau, SiD3Dotjs, SiLinux, SiHive, SiAmazon, SiGoogle, SiDocker, SiPandas, SiFlask, SiSqlalchemy, SiNodedotjs, SiNumpy, SiScikitlearn} from "react-icons/si";
import styles from "./Skills.module.css";

const skillCategories = [
{  
  category: "Programming",
  icon: faCode,
  skills: [
      { name: "Python", icon: <DiPython size={40}/>, level: 90, proficiency: "Expert" },
      { name: "Java", icon: <DiJava size={40}/>, level: 75, proficiency: "Intermediate" },
      { name: "JavaScript", icon: <DiJavascript1 size={40}/>, level: 85, proficiency: "Advanced" },
      { name: "HTML", icon: <DiHtml5 size={40}/>, level: 80, proficiency: "Advanced" },
      { name: "CSS", icon: <DiCss3 size={40}/>, level: 70, proficiency: "Intermediate" },
  ],
},
{
  category: "Databases & Big Data",
  icon: faDatabase,
  skills: [
    { name: "MySQL", icon: <DiMysql size={40}/>, level: 85, proficiency: "Advanced" },
    { name: "MongoDB", icon: <DiMongodb size={40}/>, level: 75, proficiency: "Beginner" },
    { name: "PostgreSQL", icon: <SiPostgresql size={40}/>, level: 80, proficiency: "Advanced" },
    { name: "Redis", icon: <SiRedis size={40}/>, level: 70, proficiency: "Beginner" },
    { name: "Apache Hive", icon: <SiHive size={40}/>, level: 80, proficiency: "Intermediate" },
    { name: "Snowflake", icon: <SiSnowflake size={40} />, level: 70, proficiency: "Intermediate" },
    { name: "Elasticsearch", icon: <SiElasticsearch size={40} />, level: 65, proficiency: "Beginner" },
  ],
},
{
  category: "Machine Learning & AI",
  icon: faLaptopCode,
  skills: [
    { name: "TensorFlow", icon: <SiTensorflow size={40} />, level: 80, proficiency: "Advanced" },
    { name: "PyTorch", icon: <SiPytorch size={40} />, level: 75, proficiency: "Intermediate" },
    { name: "OpenCV", icon: <SiOpencv size={40} />, level: 65, proficiency: "Intermediate" },
    { name: "SpaCy", icon: <SiSpacy size={40} />, level: 70, proficiency: "Intermediate" },
    { name: "Pandas", icon: <SiPandas size={40} />, level: 90, proficiency: "Advanced" },
    { name: "NumPy", icon: <SiNumpy size={40} />, level: 85, proficiency: "Advanced" },
    { name: "scikit-learn", icon: <SiScikitlearn size={40} />, level: 80, proficiency: "Advanced" },
  ],
},
{
  category: "Cloud Platforms",
  icon: faCloud,
  skills: [
    { name: "AWS", icon: <SiAmazon size={40}/>, level: 85, proficiency: "Intermediate" },
    { name: "Google Cloud", icon: <SiGoogle size={40}/>, level: 75, proficiency: "Intermediate" },
    // { name: "Azure", icon: <SiMicrosoftazure size={40} />, level: 65, proficiency: "Intermediate" },
    { name: "Docker", icon: <SiDocker size={40} />, level: 70, proficiency: "Intermediate" },
    { name: "Kubernetes", icon: <SiKubernetes size={40} />, level: 60, proficiency: "Intermediate" },
  ],
},
{
  category: "Web Development",
  icon: faLaptopCode,
  skills: [
    { name: "React.js", icon: <SiReact size={40} />, level: 75, proficiency: "Intermediate" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, level: 65, proficiency: "Beginner" },
    { name: "Flask", icon: <SiFlask size={40} />, level: 70, proficiency: "Intermediate" },
    { name: "SQLAlchemy", icon: <SiSqlalchemy size={40} />, level: 70, proficiency: "Intermediate" },
  ],
},
// {
//   category: "CI/CD & Tools",
//   icon: faChartBar,
//   skills: [
//     { name: "Git", level: 75, proficiency: "Intermediate" },
//     { name: "Docker", icon: <SiDocker size={40} />, level: 80, proficiency: "Intermediate" },
//     { name: "Jenkins", icon: <SiJenkins size={40} />, level: 60, proficiency: "Beginner" },
//     { name: "Qlik Sense", level: 70, proficiency: "Intermediate" },
//   ],
// },
{
  category: "Visualization Tools",
  icon: faChartLine,
  skills: [
    { name: "Power BI", level: 80, icon: <faChartBar size={40} />, proficiency: "Intermediate" },
    { name: "Looker", level: 70, icon: <SiLooker size={40} />, proficiency: "Intermediate" },
    { name: "Google Data Studio", icon: <SiGoogledrive size={40} />, level: 65, proficiency: "Intermediate" },
    { name: "Tableau", level: 75, icon: <SiTableau size={40} />, proficiency: "Intermediate" },
    { name: "D3.js", level: 60, icon: <SiD3Dotjs size={40} />, proficiency: "Beginner" },
  ],
},
{
  category: "Operating Systems",
  icon: faServer,
  skills: [
    { name: "Unix", level: 80, icon: <SiLinux size={40} />, proficiency: "Intermediate" },
    { name: "Linux", level: 85, icon: <SiLinux size={40} />, proficiency: "Intermediate" },
    { name: "Windows", level: 75, icon: <AiFillWindows size={40} />, proficiency: "Intermediate" },
  ],
},
];
const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <FontAwesomeIcon icon={category.icon} className={styles.categoryIcon} /> {category.category}
            </h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <div className={styles.iconAndName}>
                      {skill.icon} {/* Render the icon here */}
                      <h4>{skill.name}</h4>
                    </div>
                    <span className={styles.proficiencyLabel}>{skill.proficiency}</span>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;