import React from "react";
import { useHistory } from "react-router-dom";
import isElectron from "is-electron";

// icons
import JusticeDefenders from "../../assets/jf-icon.svg";

// styles
import { FullScreenSection } from "../../Components/Styles/Containers";
import {
  LandingButton,
  ButtonContainer,
  MainTitleLogo,
} from "./LandingPage.style";

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <>
      <FullScreenSection>
        <MainTitleLogo src={JusticeDefenders} data-cy="jd-logo" />
        <ButtonContainer>
          <LandingButton onClick={() => handleClick()} data-cy="start-button">
            Get Started!
          </LandingButton>
          {!isElectron() && (
            <a
              download
              href={
                "https://firebasestorage.googleapis.com/v0/b/justice-defenders.appspot.com/o/electron-app%2Fwin-unpacked.rar?alt=media&token=6863d29b-9643-4e18-b25f-c1281ffe59eb"
              }>
              <LandingButton data-cy="win-download">
                Download for Windows
              </LandingButton>
            </a>
          )}
        </ButtonContainer>
      </FullScreenSection>
    </>
  );
};

export default LandingPage;
