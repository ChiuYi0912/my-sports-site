import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '训练干货',
    description: (
      <>
        分享日常训练笔记。
        包含体能计划、专项技术动作解析以及伤病恢复建议。
      </>
    ),
  },
  {
    title: '体育理念',
    description: (
      <>
        不只是练身体，也要练脑子。
        探讨比赛心理、运动逻辑和竞技体育的核心价值观。
      </>
    ),
  },
  {
    title: '欢迎投稿',
    description: (
      <>
        这是一个开源项目。
        欢迎大家提交 Pull Request，分享你自己的运动经验和知识。
      </>
    ),
  },
];

function Feature({ emoji, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span style={{ fontSize: '4rem' }}>{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}