'use client';

import { Dictionary } from '@/lib/i18n/getDictionary';
import { EDUCATION } from '@/config/education';
import css from './Education.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '../ui/Icon/Icon';

interface EducationProps {
  dict: Dictionary;
}

const Education = ({ dict }: EducationProps) => {
  const [activeTab, setActiveTab] = useState(EDUCATION[0].id);

  const activeEducation =
    EDUCATION.find(item => item.id === activeTab) || EDUCATION[0];

  return (
    <section className={css.education}>
      <div className={css.educationContainer}>
        <h2 className={css.educationTitle}>{dict.education.title}</h2>

        <div className={css.educationContent}>
          <div className={css.educationTabs}>
            {EDUCATION.map(item => {
              const isActive = item.id === activeTab;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={
                    isActive ? css.educationActiveTabBtn : css.educationTabBtn
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className={css.educationImagesWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEducation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className={css.educationImageMotionDiv}
              >
                {activeEducation.id === 'college' ? (
                  <Icon name={'college'} className={css.educationSvg} />
                ) : (
                  <Image
                    src={activeEducation?.image}
                    alt={activeEducation?.alt}
                    width={600}
                    height={400}
                    className={css.educationImage}
                  />
                )}

                <div className={css.educationRefs}>
                  {activeEducation.href.map((item, index) => {
                    const hasHref = Boolean(item.href);
                    const hasLabel = Boolean(item.label);
                    const hasHrefLabel = Boolean(item.hrefLabel);

                    return (
                      <div key={index} className={css.educationRefItem}>
                        {hasLabel && (
                          <p className={css.educationRefLabel}>{item.label}</p>
                        )}

                        {hasHref ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css.educationLink}
                          >
                            {item.hrefLabel || 'Link'}
                          </a>
                        ) : (
                          hasHrefLabel && (
                            <p className={css.educationRefLabel}>
                              {item.hrefLabel}
                            </p>
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
