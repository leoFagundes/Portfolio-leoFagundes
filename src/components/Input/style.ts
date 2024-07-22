import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    height: 44px;
  }

  input,
  textarea {
    width: 450px;

    padding: 16px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.whiteColor};

    &:focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
    }

    &::placeholder {
      color: ${({ theme }) => theme.grayColor};
    }

    &.error {
      border: 1px solid ${({ theme }) => theme.errorColor};

      &:focus {
        box-shadow: ${({ theme }) => theme.shadows.error.boxShadow};
      }

      &::placeholder {
        color: ${({ theme }) => theme.errorColor};
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      width: 300px;
    }
  }
`;
