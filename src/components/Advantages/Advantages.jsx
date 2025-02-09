import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import s from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className="container">
      <div className={s.advantagesSection}>
        <div className={s.headerContainer}>
          <h2 className={s.headerTitle}>Daily use - effortless connection!</h2>
        </div>
        <div>
          <p className={s.advantageText}>
            Phonebook takes the hassle out of managing your contacts. Whether
            you are dealing with a long list of personal contacts or keeping
            track of business connections, our app offers an easy-to-use
            interface that helps you manage everything efficiently. From adding
            new contacts to organizing them into custom groups, Phonebook makes
            it a breeze.
          </p>
        </div>
        <div className={s.advantagesContainer}>
          <h2 className={s.advantagesTitle}>Our Advantages</h2>
          <div className={s.divider}></div>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={s.accordionButton}>
                  Easy Contact Management <p className={s.prompt}>Click me!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.accordionContent}>
                <ul className={s.accordionList}>
                  <li className={s.accordionListItem}>
                    Save names, phone numbers, emails, addresses, and additional
                    notes.
                  </li>
                  <li className={s.accordionListItem}>
                    Organize contacts into groups (e.g., Family, Work, Friends).
                  </li>
                  <li className={s.accordionListItem}>
                    Add profile pictures for easy recognition.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={s.accordionButton}>
                  Smart Search & Quick Access{" "}
                  <p className={s.prompt}>Click me!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.accordionContent}>
                <ul className={s.accordionList}>
                  <li className={s.accordionListItem}>
                    Instantly find contacts using a powerful search and
                    filtering system.
                  </li>
                  <li className={s.accordionListItem}>
                    Quick-dial feature allows one-tap calling or messaging.
                  </li>
                  <li className={s.accordionListItem}>
                    Recent contacts section for easy access to frequently used
                    numbers.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={s.accordionButton}>
                  Cloud Backup & Sync <p className={s.prompt}>Click me!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.accordionContent}>
                <ul className={s.accordionList}>
                  <li className={s.accordionListItem}>
                    Never lose contacts—automatically sync with cloud storage.
                  </li>
                  <li className={s.accordionListItem}>
                    Access your contacts from multiple devices.
                  </li>
                  <li className={s.accordionListItem}>
                    Secure backup ensures restoration in case of phone loss or
                    change.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={s.accordionButton}>
                  Security & Privacy <p className={s.prompt}>Click me!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.accordionContent}>
                <ul className={s.accordionList}>
                  <li className={s.accordionListItem}>
                    Password-protected access for extra security.
                  </li>
                  <li className={s.accordionListItem}>
                    Encrypted data storage to keep your contacts safe.
                  </li>
                  <li className={s.accordionListItem}>
                    Private mode for hiding sensitive contacts.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={s.accordionButton}>
                  Multi-Platform Support <p className={s.prompt}>Click me!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.accordionContent}>
                <ul className={s.accordionList}>
                  <li className={s.accordionListItem}>
                    Available on Android, iOS, and web for seamless access.
                  </li>
                  <li className={s.accordionListItem}>
                    Works across multiple devices with synchronized updates.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
