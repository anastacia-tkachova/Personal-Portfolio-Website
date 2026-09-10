'use client';

import { CONTACTS } from '@/config/contacts';
import Image from 'next/image';
import { Icon } from '../ui/Icon/Icon';
import css from './Contacts.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/lib/i18n/getDictionary';

const Contacts = (dict: Dictionary) => {
  const [activeTab, setActiveTab] = useState(CONTACTS[0].id);

  const activeContact =
    CONTACTS.find(item => item.id === activeTab) || CONTACTS[0];

  return (
    <section className={css.contacts}>
      <div className={css.contactsContainer}>
        <h2 className={css.contactsTitle}>{dict.contacts.title}</h2>

        <div className={css.contactsContent}>
          <div className={css.contactsTabs}>
            {CONTACTS.map(item => {
              const isActive = item.id === activeTab;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={
                    isActive ? css.contactsActivTabBtn : css.contactsTabBtn
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className={css.contactsImagesWrapper}>
            <AnimatePresence mode="wait">
              <motion.a
                key={activeContact.id}
                href={activeContact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className={css.contactsLink}
              >
                <Image
                  src={activeContact?.image_x1}
                  alt={activeContact?.alt}
                  width={600}
                  height={400}
                  className={css.contactsImage}
                />

                <div className={css.contactsArrow}>
                  <Icon name={'linkArrow'} />
                </div>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
