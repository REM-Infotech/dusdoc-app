<template>
  <BTab title="Dados Pessoais" active>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Digite o nome completo"
        required
      />
      <label for="nome" class="form-label">Nome</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="cpf" placeholder="Digite o CPF" required />
      <label for="cpf" class="form-label">CPF</label>
    </div>
    <div class="form-floating mb-3">
      <input type="date" class="form-control" id="dataNascimento" required />
      <label for="dataNascimento" class="form-label">Data de Nascimento</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="email" placeholder="Digite o email" required />
      <label for="email" class="form-label">E-mail</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="tel"
        class="form-control"
        id="telefone"
        placeholder="Digite o telefone"
        required
      />
      <label for="telefone" class="form-label">Telefone</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="cep" placeholder="Digite o CEP" required />
      <label for="cep" class0="form-label">CEP</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="endereco"
        placeholder="Digite o endereço"
        required
      />
      <label for="endereco" class="form-label">Endereço</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="complemento"
        placeholder="Digite o endereço"
        required
      />
      <label for="complemento" class="form-label">Complemento</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="cidade" placeholder="Digite a cidade" required />
      <label for="cidade" class="form-label">Cidade</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="estado" placeholder="Digite o estado" required />
      <label for="estado" class="form-label">Estado</label>
    </div>
  </BTab>
</template>
