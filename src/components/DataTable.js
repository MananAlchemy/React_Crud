import React from "react";
import EnhancedTable from "./Table";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 650px;
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const TopNavbar = styled.div`
  background-color: #222;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const TableContainer = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  width: 1000px;
`;

const DataTable = () => {
  // Your existing code

  return (
    <Container>
      <Sidebar>
        <Logo src="path/to/company-logo1.png" alt="Company Logo 1" />
        <Logo src="path/to/company-logo2.png" alt="Company Logo 2" />
        {/* Add more logos as needed */}
      </Sidebar>
      <Content>
        <TopNavbar>
          <h2>Data Table</h2>
          <LoginLink href="/login">Login</LoginLink>
        </TopNavbar>
        <TableContainer>
          <EnhancedTable />
        </TableContainer>
      </Content>
    </Container>
  );
};

export default DataTable;
