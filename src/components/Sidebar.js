import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import bookData from '../utils/bookData.json';
import BookCard from './BookCard'; // Import the new BookCard component

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSidebar = () => {
  const { book } = bookData;

  const generateMenuItems = () => {
    return book.chapters.map(chapter => (
      <SubMenu
        key={`chapter-${chapter.chapterNumber}`}
        title={`${chapter.chapterNumber}: ${chapter.title}`}
        icon={<UserOutlined />}
      >
        {chapter.subChapters.map(subChapter => (
          <Menu.Item key={`subchapter-${subChapter.subChapterNumber}`}>
            {`${subChapter.subChapterNumber}: ${subChapter.title}`}
          </Menu.Item>
        ))}
      </SubMenu>
    ));
  };

  return (
    <Sider
      style={{
        background: '#fff',
      }}
      width={300}
    >
      <BookCard /> {/* Add the BookCard component here */}
      <Menu
        mode="inline"
        style={{
          height: 'calc(100% - 200px)', // Adjust the height to fit the card
          marginTop: '16px',
        }}
      >
        {generateMenuItems()}
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
