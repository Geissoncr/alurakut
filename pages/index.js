import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import ProfileSideBar from '../src/components/ProfileSideBar'

// function handleCriaComunidade(e){
//   return (
//     e
//   )
// }
export default function Home() {
  
  const githubUser = 'geissoncr'
  const [comunidades, setComunidades] = React.useState([{
    id: '2021-08-17T18:34:49.1892',
    title: 'Teste de Comunidade',
    image: 'teste.jpg'
  }]);
  const pessoasFavoritas = ['andreclaudino', 'Brutos212', 'peas', 'VitorSavedra', 'felipefialho']
  

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>
              Bem-vindo (a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle"> Qual Comunidade voce deseja criar?</h2>
            <form onSubmit = {function handleCriaComunidade(e) {
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);
              console.log("campo---->", dadosDoForm.get('title'))
              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              setComunidades([...comunidades,comunidade])
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma url para usar de capa"
                  name="image"
                  aria-label="Coloque uma url para usar de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>

            </form>
          </Box>
        </div>
        <div className="profileRelationArea" style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade({pessoasFavoritas.length}):
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                console.log(itemAtual)
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}

            </ul>


          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades({comunidades.length}):
            </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li  key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={`https://placehold.it/300x300`} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}

            </ul>
            
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
