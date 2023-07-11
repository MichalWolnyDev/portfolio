import React from 'react'
import styles from '../../scss/UI/TechIcon.module.scss'

type TechIconProps = {
  icon: string,
  alt: string
}

const TechIcon = (props: TechIconProps) => {
  return (
    <div className={styles.icon}>
      <img src={props.icon} alt={props.alt} />
    </div>
  )
}

export default TechIcon