class MenuSearchPage
{
    get menuSearchField()
    {
        return $('input')
    }

    get itemList()
    {
        return $('.menu-list-item-details')
    }

    get menuFullList()
    {
        return $('.menu-list-layout-rows')
    }

    get bottomMenu()
    {
        return $('#tab-bar-menus')
    }

    get itemPrice()
    {
        return $('.menu-item-price')
    }


   async SearchMenuItem(menuItem)
    {
       await this.menuSearchField.setValue(menuItem)
        await expect(this.itemList).toBeDisplayed()
       
    }
}
export default new MenuSearchPage();