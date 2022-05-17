import { useContext } from 'react'
import { VscRepoForked, VscRepo } from 'react-icons/vsc'
import { IoMdStar } from 'react-icons/io'

import GithubContext from '../../context/github/GithubContext'
import { colorMap } from '../../assets/colorMap'

const RepoItem = ({ repo }) => {
  const { IntergerFormatter } = useContext(GithubContext)
  const {
    name,
    description,
    html_url,
    forks,
    stargazers_count,
    language,
    size,
  } = repo
  //conditional colors

  const lang_color = (lang) => {
    return colorMap[lang]
  }

  return (
    <div className='repo-item mb-2 shadow-md rounded-md bg-slate-300 px-4 py-4 h-full flex flex-col justify-between hover:cursor-pointer hover:bg-dark transition duration-400 ease-out hover:ease-in'>
      <a
        href={html_url}
        rel='noreferrer'
        target='_blank'
        className='repo-title flex items-center justify-start text-dark text-xl'
      >
        <VscRepo className='mr-1' />
        <h3 className='mb-1 text-lg font-semibold truncate'>{name}</h3>
      </a>

      <em className='text-sm my-1 text-dark-gray repo-description'>
        {description}
      </em>

      <div className='flex w-full justify-between items-center text-slate-600 text-sm'>
        <div className='flex w-2/3 justify-start items-center text-slate-600 text-sm'>
          {language && (
            <div className='flex justify-start items-center mr-3'>
              <div
                className={`w-2 h-2 rounded-full ${lang_color(language)} mr-2`}
              ></div>
              <div className='repo-stat'>{language}</div>
            </div>
          )}
          <div className={repo_info}>
            <IoMdStar className='mr-1' />
            {IntergerFormatter(stargazers_count)}
          </div>

          <div className={repo_info}>
            <VscRepoForked className='mr-1' />
            {forks}
          </div>
        </div>
        <div className={repo_info}>
          <div className='flex'>{IntergerFormatter(size)} KB</div>
        </div>
      </div>
    </div>
  )
}
const repo_info = 'mr-3 flex items-center repo-stat'
export default RepoItem
