const notaDoAluno1 = 5; // essa linha guarda a nota do aluno 1
const notaDoAluno2 = 8; // essa linha guarda a nota do aluno 2 
const notaDoAluno3 = 8; // essa linha guarda a nota do aluno 2 

const nomeDoAluno1 = "joão"; //strings
const nomeDoAluno2 = "pedrinho"; //strings


const media = (notaDoAluno1+nomeDoAluno2+notaDoAluno3)/2

console.log(`a media dos alunos é ${media}`);

console.log(typeof nomeDoAluno1 );

if(media >5 ){
    console.log(`parabens a nota da turma foi de ${media}`)
}

else {
    console.log(`carro a nota da turma foi de ${media} vai estudar mais agora vai vir para sala na hora certa e não vai amis conversar com livia antes do horario da aula, pqe vc não gazeia a aula de outro professor para falar com ela?`)
}
