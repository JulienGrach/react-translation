import styled from 'styled-components';

export const StyledDropdown = styled.div<{ isOpen: boolean }>`
    position: relative;
    cursor: pointer;
    width: 200px;
    z-index: 0;
    user-select: none;

    &:after {
        position: absolute;
        content: '\\276E';
        right: 10px;
        font-size: 10px;
        top: 50%;
        transform: translate(0, -50%) rotate(${({ isOpen }) => (isOpen ? '90' : '-90')}deg);
        transition: transform 250ms ease;
    }
`;

export const StyledHead = styled.div`
    padding: 10px 25px 10px 10px;
    border: 1px solid;
`;

export const StyledOptionsWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid;
    border-top: 0;
    z-index: 0;
`;

export const StyledOption = styled.div`
    width: 100%;
    box-sizing: border-box;
    &:not(:last-of-type) {
        border-bottom: 1px solid;
    }
    cursor: pointer;
    padding: 10px;
    position: relative;
    z-index: 1;

    &:hover {
        background-color: grey;
        color: white;
    }
`;
