import React from 'react'
import GithubIcon from '../Svg/GithubIcon'
import WebsiteIcon from '../Svg/WebsiteIcon'
import styles from '../../scss/UI/ProjectCard.module.scss'

type CardProps = {
    imgSrc: string,
    title: string,
    desc: string,
    githubLink: string,
    liveViewLink: string
}

const ProjectCard = (props: CardProps) => {
    return (
        <div className={`${styles.card} bg-black`}>
            <div>
                <img className={styles.card__img} src={props.imgSrc} alt={props.title} />
                <h5>
                    {props.title}
                </h5>
                <p className={styles.card__desc}>
                    {props.desc}
                </p>
                <div className='flex gap-4 py-2'>
                    <a href={props.githubLink} target='_blank'>
                        <GithubIcon />
                    </a>
                    <a href={props.liveViewLink} target='_blank'>
                        <WebsiteIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard