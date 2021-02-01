import React from 'react';
import { FaEnvira, FaRecycle } from 'react-icons/fa';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIconButton = styled.button`
  background-color: black;
  border-style: normal;
  border-radius: 50%;
  align-self: flex-start;
`;

class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.icons && this.props.icons.length > 0) {
      return (
        <StyledIconButton>
          <svg fill="white" width="50" height="50"viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4 15.916a.698.698 0 0 1 .854.343l.933 1.836a5.889 5.889 0 0 1 .077 5.526.677.677 0 0 1-.049.104l-.148.251c-1.107 1.832-3.034 2.92-5.166 2.865l-2.796-.027-.042 2.499a.698.698 0 0 1-1.155.516l-6.122-5.301a.698.698 0 0 1 .035-1.085l6.237-4.733a.699.699 0 0 1 1.121.56l-.012 2.27 2.813.028a.593.593 0 0 0 .557-.293.619.619 0 0 0 .022-.652h.002l-1.024-1.766a2.768 2.768 0 0 1-.077-.129l-.103-.198a.83.83 0 0 1-.135-.79c.059-.166.2-.395.537-.538.058-.025.236-.1 3.54-1.251zm-7.625 4.764l-4.423 3.356 4.339 3.757.028-1.697a.7.7 0 0 1 .698-.687h.008l3.495.035a4.487 4.487 0 0 0 3.947-2.185l.106-.178a.47.47 0 0 1 .025-.053c.04-.077.07-.158.106-.237a2.513 2.513 0 0 1-.79.137l-3.62.045a.739.739 0 0 1-.132-.011l-3.104-.032a.698.698 0 0 1-.691-.702l.008-1.548zm-7.73-10.62a.7.7 0 0 1 .935.551l1.155 7.745a.7.7 0 0 1-1.03.713l-1.985-1.1-.719 1.28-.006.016-.658 1.171a.613.613 0 0 0-.004.615c.13.224.321.333.56.333l1.621-.078c.08-.004.111-.005.144-.005l.222.005a.94.94 0 0 1 .135-.01c.243 0 .463.096.622.27.118.132.252.365.215.73-.016.162-.167 1.042-.555 3.246l-.09.514a.698.698 0 0 1-.681.583l-1.608.018a5.904 5.904 0 0 1-4.914-2.588.696.696 0 0 1-.067-.092l-.149-.25a5.863 5.863 0 0 1-.031-5.907l1.368-2.44-2.172-1.237a.7.7 0 0 1 .102-1.262zm-3.25 12.057l-.665 1.184c-.127.235-.463 1.058.614 1.677l.01.007a4.55 4.55 0 0 0 1.549.275l1.027-.012c.105-.598.32-1.813.442-2.535l-1.443.068a2.04 2.04 0 0 1-1.535-.664zm2.93-10.447l-5.38 1.999 1.475.84c.334.19.452.614.263.95l-1.71 3.048a4.478 4.478 0 0 0 .02 4.512l.106.179c.013.015.025.03.035.046.031.048.07.09.102.136.056-.288.155-.552.278-.767l1.6-2.853c.005-.009.008-.017.014-.026l1.714-3.055a.699.699 0 0 1 .948-.27l1.353.752-.818-5.491zm15.56 5.766c-1.3.453-2.036.713-2.451.86l.943 1.642c.28.512.33 1.085.16 1.61l1.367-.018c.266-.006 1.123-.127 1.147-1.321a4.558 4.558 0 0 0-.517-1.496zM15.945 3l.29.003c2.141.052 4.027 1.195 5.054 3.06l1.365 2.441 2.19-1.206a.699.699 0 0 1 1.022.747l-1.558 7.946a.698.698 0 0 1-.96.509l-7.206-3.061a.698.698 0 0 1-.07-1.252l1.974-1.118-1.372-2.454a.615.615 0 0 0-.532-.338.609.609 0 0 0-.575.302l-.914 1.6a2.341 2.341 0 0 1-.069.124l-.12.188a.971.971 0 0 1-.063.12.825.825 0 0 1-.555.388c-.175.033-.443.025-.735-.197-.203-.154-2.797-2.29-2.966-2.436a.699.699 0 0 1-.128-.906l1.052-1.632a5.941 5.941 0 0 1 1.308-1.488.693.693 0 0 1 .225-.201c.042-.023.082-.04.123-.06a5.861 5.861 0 0 1 3.106-1.07.684.684 0 0 1 .113-.009zM16 4.398c-.019.003-.038.004-.057.005-.058.002-.114.013-.171.017a2.5 2.5 0 0 1 .476.6l1.772 3.124c.014.024.022.05.032.075l1.553 2.775a.698.698 0 0 1-.266.95l-1.348.762 5.11 2.17 1.105-5.632-1.487.82a.699.699 0 0 1-.947-.272l-1.706-3.05a4.477 4.477 0 0 0-3.857-2.34zm-.97 1.306c-.13-.22-.62-.876-1.606-.415-.46.341-.859.77-1.17 1.275-.001.005-.004.009-.007.013a.564.564 0 0 1-.033.047l-.689 1.072c.55.455 1.454 1.2 1.995 1.641l.842-1.467a2.011 2.011 0 0 1 1.357-.95z"> </path>
          </svg>
          {/* <FaEnvira />
          <FaRecycle /> */}
        </StyledIconButton>
      );
    }
    return (
      <StyledIconContainer>
        <div>ICON GOES HERE</div>
        <div>ICON Title</div>
        <div>ICON description</div>
      </StyledIconContainer>
    );
  }
}

export default IconComponent;
