import {expect, test} from './todo-page'

test('fixture test', async ({page, todoPage}) =>{
   await todoPage.addTodo('spec Fixture Test')
   expect(page.getByTestId('todo-title')).toContainText(['spec Fixture Test'])
})