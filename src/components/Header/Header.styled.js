import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiCameraMovie } from 'react-icons/bi';

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 40px 16px;
    margin-bottom: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const Box = styled.div`
    display: flex;
    gap: 20px;
`;

export const Logo = styled(BiCameraMovie)`
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: rgb(255, 245, 238, 0.8);
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 28px;
    padding: 8px;
    color: rgb(255, 245, 238, 0.8);

    &:not(:last-child) {
        margin-right: 20px;
      }

    &.active {
        color: #cc0000;
    }
`;