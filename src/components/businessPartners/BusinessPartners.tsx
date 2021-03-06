import React from 'react'
import styles from './BusinessPartners.module.css'
import { Divider, Row, Col, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

import image1 from '../../assets/images/facebook-807588_640.png'
import image2 from '../../assets/images/follow-826033_640.png'
import image3 from '../../assets/images/icon-720944_640.png'
import image4 from '../../assets/images/microsoft-80658_640.png'

const companies = [
  { src: image1, title: 'Facebook' },
  { src: image2, title: 'Ins' },
  { src: image3, title: 'Youtube' },
  { src: image4, title: 'Microsoft' }
]

export const BusinessPartners: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.content}>
      <Divider orientation='left'>
        <Typography.Title level={3}>{t('home_page.joint_venture')}</Typography.Title>
      </Divider>
      <Row>
        {companies.map((company, index) => (
          <Col span={6} key={`business-partner-${index}`}>
            <img
              src={company.src}
              alt="business-partne"
              style={{
                display: 'block',
                width: '80%',
                margin: '0 auto'
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}