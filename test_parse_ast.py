import ast
import json

code = """
def greet(name):
    return f'Hello, {name}!'
"""

# 使用`ast.parse`将代码解析成AST树
tree = ast.parse(code)

# 定义一个AST节点转换函数


def ast_to_dict(node):
    if isinstance(node, ast.AST):
        return {
            'node_type': type(node).__name__,
            'fields': {field: ast_to_dict(value) for field, value in ast.iter_fields(node)},
        }
    elif isinstance(node, list):
        return [ast_to_dict(item) for item in node]
    else:
        return node


# 将AST树转换为字典
ast_dict = ast_to_dict(tree)

# 将字典转换为JSON格式
ast_json = json.dumps(ast_dict, indent=4)

# 打印JSON
print(ast_json)
