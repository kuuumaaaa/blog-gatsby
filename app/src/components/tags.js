import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Tag = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag)}/`}>
    <li className="w-auto text-sm inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-1 px-4 rounded-full" >
      {tag}
    </li>
  </Link>
);

const Tags = ({ tags }) => (
  <ul className="" >
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags