


export default class Fornecedores {
  constructor(db) {
    this.db = db;
  }
  
  // Método para inserir um fornecedor no banco de dados
  async create(fornecedor) {
    await this.db.run(`
      INSERT INTO fornecedores (
        nome,
        cnpj,
        telefone,
        email,
        endereco,
        cidade,
        estado,
        pais,
        cep
      ) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        fornecedor.nome,
        fornecedor.cnpj,
        fornecedor.telefone,
        fornecedor.email,
        fornecedor.endereco,
        fornecedor.cidade,
        fornecedor.estado,
        fornecedor.pais,
        fornecedor.cep
      ]
    );
  }
  // Método para listar todos os fornecedores do banco de dados
  async findAll() {
    const fornecedores = await this.db.all(`SELECT * FROM fornecedores`);
    return fornecedores;
  }
  // Método para listar um fornecedor do banco de dados
  async find(id) {
    const fornecedor = await this.db.get(`SELECT * FROM fornecedores WHERE id = ?`, [id]);
    return fornecedor;
  }
  // Método para atualizar um fornecedor no banco de dados
  async update(fornecedor) {
    await this.db.run(`
      UPDATE fornecedores SET
        nome = ?,
        cnpj = ?,
        telefone = ?,
        email = ?,
        endereco = ?,
        cidade = ?,
        estado = ?,
        pais = ?,
        cep = ?
      WHERE id = ?`,
        [
            fornecedor.nome,
            fornecedor.cnpj,
            fornecedor.telefone,
            fornecedor.email,
            fornecedor.endereco,
            fornecedor.cidade,
            fornecedor.estado,
            fornecedor.pais,
            fornecedor.cep,
            fornecedor.id
        ]
        );
    }
    // Método para deletar um fornecedor no banco de dados
    async delete(id) {
      await this.db.run(`DELETE FROM fornecedores WHERE id = ?`, [id]);
    }
    }