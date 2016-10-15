require 'active_record'
#
class Trainee < ActiveRecord::Base
  validates :currentform, :finalform, :trainnumber, presence: true
end
